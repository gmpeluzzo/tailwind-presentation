import { useLocalStorage } from '@mantine/hooks';
import { useEffect } from 'react';

type Theme = 'light' | 'dark' | 'reggae';

const themeMapping: Record<string, Theme> = {
  'dark': 'light',
  'light': 'reggae',
  'reggae': 'dark',
}

export const Navbar = () => {
  const [theme, setTheme] = useLocalStorage<Theme>({
    key: 'theme',
    defaultValue: 'dark',
  })

  const handleChangeTheme = () => {
    const newTheme = themeMapping[theme];
    setTheme(newTheme);
    document.documentElement.className = newTheme;
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme])

  return (
    <header className="bg-white dark:bg-gray-800 reggae:bg-red-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="lg:text-4xl sm:text-2xl md:text-3xl reggae:text-amber-600 font-bold">Meu App</h1>
        <button
          onClick={handleChangeTheme}
          className="px-3 py-1 rounded bg-gray-300 dark:bg-gray-700 reggae:text-amber-200 reggae:bg-blue-800"
        >
          Alternar Tema ({theme})
        </button>
      </div>
    </header>
  );
}