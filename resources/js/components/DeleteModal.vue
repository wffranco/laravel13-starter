<script setup lang="ts">
import { Form } from '@inertiajs/vue3';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import type { RouteFormDefinition } from '@/wayfinder';
import DialogTrigger from './ui/dialog/DialogTrigger.vue';

type Props = {
  form: RouteFormDefinition<'post'>;
  name?: string;
  open?: boolean;
};

defineProps<Props>();

const emit = defineEmits<{
  'update:open': [value: boolean];
}>();

function handleOpenChange(nextOpen: boolean) {
  emit('update:open', nextOpen);
}
</script>

<template>
  <Dialog :open="open" @update:open="handleOpenChange">
    <template v-if="$slots.trigger">
      <DialogTrigger>
        <slot name="trigger" />
      </DialogTrigger>
    </template>
    <DialogContent>
      <Form
        v-bind="form"
        class="space-y-6"
        v-slot="{ processing }"
        @success="handleOpenChange(false)"
      >
        <DialogHeader>
          <DialogTitle class="pb-4">Are you sure?</DialogTitle>
          <DialogDescription>
            <slot name="description">
              <p>This action cannot be undone.</p>
              <p>
                This will permanently delete
                <template v-if="name">
                  <strong>"{{ name }}"</strong>
                </template>
                .
              </p>
            </slot>
          </DialogDescription>
        </DialogHeader>

        <DialogFooter class="gap-2">
          <DialogClose as-child>
            <Button variant="secondary" aria-label="Cancel" />
          </DialogClose>

          <Button
            data-test="delete-team-confirm"
            type="submit"
            variant="destructive"
            :disabled="processing"
            aria-label="Delete team"
          />
        </DialogFooter>
      </Form>
    </DialogContent>
  </Dialog>
</template>
