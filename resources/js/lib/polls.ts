import type { PollOptions, ReloadOptions } from '@inertiajs/core';
import { usePoll } from '@inertiajs/vue3';
import type { WatchHandle, WatchOptions, WatchSource } from 'vue';
import { watch } from 'vue';

type MaybeUndefined<T, I> = I extends true ? T | undefined : T;

interface WatchPollOptions<
  Immediate = boolean,
> extends WatchOptions<Immediate> {
  interval: number;
  requestOptions?: ReloadOptions | undefined;
  options?: Omit<PollOptions, 'autoStart'>;
}

type WatchCallback<V = any, OV = any> = (
  value: V,
  oldValue: OV,
  onCleanup: (cleanupFn: () => void) => void,
) => boolean | undefined;

export function watchPoll<T, Immediate extends Readonly<boolean> = false>(
  source: WatchSource<T>,
  cb: WatchCallback<T, MaybeUndefined<T, Immediate>>,
  options: WatchPollOptions<Immediate>,
): WatchHandle {
  const {
    interval,
    requestOptions = {},
    options: pollOptions = {},
    ...watchOptions
  } = options;

  let started = false;
  const { start, stop } = usePoll(
    interval,
    requestOptions,
    Object.assign(pollOptions, { autoStart: false }),
  );

  return watch(
    source,
    (newInterval, oldInterval, onCleanup) => {
      if (cb(newInterval, oldInterval, onCleanup) && !started) {
        start();
        started = true;
      } else if (!cb(newInterval, oldInterval, onCleanup) && started) {
        stop();
        started = false;
      }
    },
    watchOptions,
  );
}
