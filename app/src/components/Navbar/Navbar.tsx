import { useLocalStorage } from '@mantine/hooks';
import { useEffect } from 'react';

type Theme = 'light' | 'dark';

export const Navbar = () => {
  const [theme, setTheme] = useLocalStorage<Theme>({
    key: 'theme',
    defaultValue: 'dark',
  })

  const onToggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.className = newTheme;
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme])

  return (
    <header className="bg-gray-100 dark:bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="lg:text-4xl sm:text-2xl md:text-3xl font-bold">Meu App</h1>
        <button
          onClick={onToggleTheme}
          className="px-3 py-1 rounded bg-gray-300 dark:bg-gray-700"
        >
          Alternar Tema ({theme})
        </button>
      </div>
    </header>
  );
}