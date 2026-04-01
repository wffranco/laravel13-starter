import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {
  defineComponent,
  ref,
  computed,
  watch,
  onBeforeMount,
  onBeforeUnmount,
} from 'vue';

const presets = [
  ['datetime', 'YYYY-MM-DD HH:mm:ss'],
  ['date', 'YYYY-MM-DD'],
  ['time', 'HH:mm:ss'],
  ['shorttime', 'HH:mm'],
] as const;

export const timeoutRules: [RegExp, number][] = [
  [/(a few|\d+) seconds? ago/, 1000], // seconds
  [/(a|\d+) minutes? ago/, 60 * 1000], // minutes
  [/(an|\b\d) hours? ago/, 60 * 60 * 1000], // hours (less than 10)
];

// import "dayjs/locale/es";

// dayjs.locale("es");
dayjs.extend(relativeTime);

export { dayjs, presets };

export const DateTime = defineComponent({
  name: 'DateTime',
  props: {
    date: Boolean,
    datetime: Boolean,
    format: String,
    relative: Boolean,
    time: Boolean,
    shorttime: Boolean,
    value: [Date, String],
  },
  setup(props, { attrs }) {
    const rdate = ref('');
    let timer: number | null = null;

    const dformat = computed(
      () => presets.find(([type]) => props[type])?.[1] ?? props.format,
    );
    const fdate = computed(() =>
      dformat.value ? dayjs(props.value).format(dformat.value) : '',
    );

    watch(() => props.relative, setRelativeDate);

    function clearTimer() {
      if (!timer) {
        return;
      }

      clearTimeout(timer);
      timer = null;
    }

    function setRelativeDate() {
      clearTimer();

      if (!props.relative) {
        rdate.value = '';

        return;
      }

      rdate.value = dayjs(props.value).fromNow();

      const rule = timeoutRules.find(([rule]) => rule.test(rdate.value))?.[1];

      if (!rule) {
        return;
      }

      timer = setTimeout(setRelativeDate, rule);
    }

    onBeforeMount(setRelativeDate);

    onBeforeUnmount(clearTimer);

    return () => (
      <span {...attrs}>
        {`${fdate.value}${fdate.value ? ` (${rdate.value})` : rdate.value}`}
      </span>
    );
  },
});
