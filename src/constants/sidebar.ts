type SidebarItem = {
  title: string;
  href: string;
};

type SidebarSection = {
  title: string;
  items: SidebarItem[];
};

function baseForLang(lang: string) {
  if (lang === 'es') return '/documentation/es';
  return '/documentation';
}

export function getSidebar(lang = 'en'): SidebarSection[] {
  const base = baseForLang(lang);

  if (lang === 'es') {
    return [
      {
        title: 'Seedloaf',
        items: [
          { title: 'Quiénes somos', href: base + '/who-we-are' },
          { title: 'Cómo ganamos dinero', href: base + '/how-do-we-make-money' },
          { title: 'Preguntas frecuentes', href: base + '/frequently-asked-questions' },
        ],
      },
      {
        title: 'Servidor',
        items: [
          { title: 'Problemas comunes', href: base + '/common-issues' },
          { title: 'Propiedades del servidor', href: base + '/server-properties' },
          { title: 'Subir un mundo personalizado', href: base + '/custom-world-upload' },
        ],
      },
      {
        title: 'Aprende Seedloaf',
        items: [
          { title: 'Crea tu primer mundo', href: base + '/create-first-world' },
          { title: 'Entender las pestañas', href: base + '/understand-tabs' },
          { title: 'Agregar usuarios al servidor', href: base + '/add-users' },
        ],
      },
      {
        title: 'Guías',
        items: [
          { title: 'Instalar mods/plugins', href: base + '/installing-mods-or-plugins' },
          { title: 'Instalar datapacks', href: base + '/installing-datapacks' },
          { title: 'Instalar Geyser', href: base + '/installing-geyser' },
          { title: 'Instalar Simple Voice Chat', href: base + '/simple-voice-chat' },
        ],
      },
      {
        title: 'Otros',
        items: [
          { title: '¿Cómo juego con amigos?', href: base + '/how-to-play-minecraft-with-friends' },
          { title: 'Colaboradores', href: base + '/contributors' },
        ],
      },
    ];
  }

  // default English sidebar (uses /documentation as base)
  return [
    {
      title: 'Seedloaf',
      items: [
        { title: 'Who we are', href: base + '/who-we-are' },
        { title: 'How we make money', href: base + '/how-do-we-make-money' },
        { title: 'Frequently Asked Questions', href: base + '/frequently-asked-questions' },
      ],
    },
    {
      title: 'Server',
      items: [
        { title: 'Common Issues', href: base + '/common-issues' },
        { title: 'Server Properties', href: base + '/server-properties' },
        { title: 'Uploading a custom world', href: base + '/custom-world-upload' },
      ],
    },
    {
      title: 'Learn Seedloaf',
      items: [
        { title: 'Create your first world', href: base + '/create-first-world' },
        { title: 'Understand the Tabs', href: base + '/understand-tabs' },
        { title: 'Add Users to Server', href: base + '/add-users' },
      ],
    },
    {
      title: 'Guides',
      items: [
        { title: 'Installing mods/plugins', href: base + '/installing-mods-or-plugins' },
        { title: 'Installing datapacks', href: base + '/installing-datapacks' },
        { title: 'Installing Geyser', href: base + '/installing-geyser' },
        { title: 'Installing Simple Voice Chat', href: base + '/simple-voice-chat' },
      ],
    },
    {
      title: 'Other',
      items: [
        { title: 'How do I play Minecraft with friends?', href: base + '/how-to-play-minecraft-with-friends' },
        { title: 'Contributors', href: base + '/contributors' },
      ],
    },
  ];
}

export default getSidebar('en');
