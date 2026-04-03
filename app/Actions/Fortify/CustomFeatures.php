<?php

namespace App\Actions\Fortify;

class CustomFeatures
{
    /**
     * This option switch the layout of the application.
     *
     * @param  'sidebar'|'header'  $layout
     */
    public static function layout(string $layout): string
    {
        return match ($layout) {
            'sidebar' => 'sidebarLayout',
            'header' => 'headerLayout',
            default => 'headerLayout',
        };
    }

    /**
     * This option enables an extra theme appearance directly in the user submenu.
     */
    public static function sidebarUserAppearance(): string
    {
        return 'sidebarUserAppearance';
    }
}
