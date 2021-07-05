### Hi, I'm Filipe Sales Araujo :metal:

---

```php
<?php

namespace FilipeSalesAraujo;

class About extends Me
{
    public function getCurrentWorkplace(): array
    {
        return [
            'workplace' => [
                'company' => 'Degrau Publicidade e Internet',
                'position' => 'Full Stack Developer'         
            ]
        ];
    }

    public function getDailyKnowledge(): array
    {
        return [
            Php::class,
            Javascript::class,
        ];
    }

    public function getFutureGoal(): string
    {
        return 'Contributing to development education.';
    }
}
```

---

[![spotify-github-profile](https://spotify-github-profile.vercel.app/api/view?uid=22pcc3zbg7fnl4nrkgh5ccqka&cover_image=true&theme=default)](https://github.com/kittinan/spotify-github-profile)
