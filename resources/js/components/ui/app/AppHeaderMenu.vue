<script setup lang="ts">
import { Link, usePage } from '@inertiajs/vue3';
import { Menu, Search } from 'lucide-vue-next';
import { computed } from 'vue';
import TeamSwitcher from '@/components/TeamSwitcher.vue';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import UserMenuContent from '@/components/UserMenuContent.vue';
import { getInitials } from '@/composables/useInitials';
import { useNavigation } from '@/lib/navigation';
import { toUrl } from '@/lib/utils';
import AppLogo from './AppLogo.vue';
import AppLogoIcon from './AppLogoIcon.vue';

const page = usePage();
const auth = computed(() => page.props.auth);

const activeItemStyles =
  'text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100';

const {
  isActive,
  mainRoute,
  navItems: mainNavItems,
  extraItems: rightNavItems,
  whenActive,
} = useNavigation();
</script>

<template>
  <div class="border-b border-sidebar-border/80">
    <div class="mx-auto flex h-16 items-center px-4 md:max-w-7xl">
      <!-- Mobile Menu -->
      <div class="lg:hidden">
        <Sheet>
          <SheetTrigger :as-child="true">
            <Button
              class="mr-2 size-9"
              size="icon"
              variant="ghost"
              aria-label="Menu"
            >
              <Menu class="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" class="w-75 p-6">
            <SheetTitle class="sr-only">Navigation menu</SheetTitle>
            <SheetHeader class="flex justify-start text-left">
              <AppLogoIcon
                class="size-6 fill-current text-black dark:text-white"
              />
            </SheetHeader>
            <div
              class="flex h-full flex-1 flex-col justify-between space-y-4 py-6"
            >
              <nav class="-mx-3 space-y-1">
                <Link
                  v-for="item in mainNavItems"
                  :key="item.title"
                  :href="item.href"
                  class="flex items-center gap-x-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent"
                  :class="whenActive(item, activeItemStyles)"
                >
                  <component v-if="item.icon" :is="item.icon" class="h-5 w-5" />
                  {{ item.title }}
                </Link>
              </nav>
              <div class="flex flex-col space-y-4">
                <a
                  v-for="item in rightNavItems"
                  :key="item.title"
                  :href="toUrl(item.href)"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center space-x-2 text-sm font-medium"
                >
                  <component v-if="item.icon" :is="item.icon" class="h-5 w-5" />
                  <span>{{ item.title }}</span>
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <Link :href="mainRoute" class="flex items-center gap-x-2">
        <AppLogo />
      </Link>

      <!-- Desktop Menu -->
      <div class="hidden h-full lg:flex lg:flex-1">
        <NavigationMenu class="ml-10 flex h-full items-stretch">
          <NavigationMenuList class="flex h-full items-stretch space-x-2">
            <NavigationMenuItem
              v-for="(item, index) in mainNavItems"
              :key="index"
              class="relative flex h-full items-center"
            >
              <Link
                :class="[
                  navigationMenuTriggerStyle(),
                  whenActive(item, activeItemStyles),
                  'h-9 cursor-pointer px-3',
                ]"
                :href="item.href"
              >
                <component
                  v-if="item.icon"
                  :is="item.icon"
                  class="mr-2 h-4 w-4"
                />
                {{ item.title }}
              </Link>
              <div
                v-if="isActive(item)"
                class="absolute bottom-0 left-0 h-0.5 w-full translate-y-px bg-black dark:bg-white"
              />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div class="ml-auto flex items-center space-x-2">
        <div class="relative flex items-center space-x-1">
          <Button
            class="group size-9 cursor-pointer"
            size="icon"
            variant="ghost"
            aria-label="Search"
          >
            <Search class="size-5 opacity-80 group-hover:opacity-100" />
          </Button>

          <div class="hidden space-x-1 lg:flex">
            <template v-for="item in rightNavItems" :key="item.title">
              <TooltipProvider :delay-duration="0">
                <Tooltip>
                  <TooltipTrigger>
                    <Button
                      class="group size-9 cursor-pointer"
                      size="icon"
                      variant="ghost"
                      as-child
                      :aria-label="item.title"
                    >
                      <a
                        :href="toUrl(item.href)"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span class="sr-only">{{ item.title }}</span>
                        <component
                          :is="item.icon"
                          class="size-5 opacity-80 group-hover:opacity-100"
                        />
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{{ item.title }}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </template>
          </div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger :as-child="true">
            <Button
              class="relative size-10 w-auto rounded-full p-1 focus-within:ring-2 focus-within:ring-primary"
              size="icon"
              variant="ghost"
              aria-label="User menu"
            >
              <Avatar class="size-8 overflow-hidden rounded-full">
                <AvatarImage
                  v-if="auth.user.avatar"
                  :src="auth.user.avatar"
                  :alt="auth.user.name"
                />
                <AvatarFallback
                  class="rounded-lg bg-neutral-200 font-semibold text-black dark:bg-neutral-700 dark:text-white"
                >
                  {{ getInitials(auth.user?.name) }}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" class="w-56">
            <UserMenuContent :user="auth.user" />
          </DropdownMenuContent>
        </DropdownMenu>

        <TeamSwitcher :in-header="true" />
      </div>
    </div>
  </div>
</template>
