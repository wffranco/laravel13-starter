import type { InertiaLinkProps } from '@inertiajs/vue3';
import { usePage } from '@inertiajs/vue3';
import { BookOpen, FolderGit2, LayoutGrid } from 'lucide-vue-next';
import type { ClassValue } from 'vue';
import { computed } from 'vue';
import { useCurrentUrl } from '@/composables/useCurrentUrl';
import { dashboard as dboard } from '@/routes';
import type { NavItem } from '@/types';

type Href = NonNullable<InertiaLinkProps['href']>;
type RouteGroup = {
  definition: {
    url?: string;
  };
};

type RouteGroups = { [key: string]: RouteGroup | RouteGroups };

const isActiveGroup = (url: string, route: RouteGroup): boolean =>
  (route.definition?.url ?? '') === url;

export function isActiveInRoutes(
  href: Href,
  routes: RouteGroup | RouteGroups,
): boolean {
  const url = typeof href === 'string' ? href : href.url;

  if ('definition' in routes) {
    return isActiveGroup(url, routes as RouteGroup);
  }

  for (const key in routes) {
    if (isActiveInRoutes(url, routes[key])) {
      return true;
    }
  }

  return false;
}

export function useNavigation() {
  const { isCurrentUrl } = useCurrentUrl();
  const page = usePage();

  const dashboard = computed(() =>
    page.props.currentTeam ? dboard(page.props.currentTeam.slug).url : '/',
  );

  const isActive = (item: NavItem): boolean =>
    item?.isActive?.(page.url) ?? isCurrentUrl(item.href);

  const navItems = computed<NavItem[]>(() => [
    {
      title: 'Dashboard',
      href: dashboard.value,
      icon: LayoutGrid,
    },
  ]);

  const extraItems: NavItem[] = [
    {
      title: 'Repository',
      href: 'https://github.com/laravel/vue-starter-kit',
      icon: FolderGit2,
    },
    {
      title: 'Documentation',
      href: 'https://laravel.com/docs/starter-kits#vue',
      icon: BookOpen,
    },
  ];

  const whenActive = (
    item: NavItem,
    ifTrue: ClassValue,
    ifFalse: ClassValue = null,
  ) => (isActive(item) ? ifTrue : ifFalse);

  return {
    extraItems,
    isActive,
    mainRoute: dashboard,
    navItems,
    whenActive,
  };
}
