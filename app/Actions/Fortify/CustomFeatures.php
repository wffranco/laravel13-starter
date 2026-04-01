<?php

namespace App\Actions\Fortify;

class CustomFeatures
{
    /** Enable appearance settings directly in the user menu */
    public static function sidebarUserAppearance(): string
    {
        return 'sidebarUserAppearance';
    }
}
