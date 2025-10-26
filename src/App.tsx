import SearchBar from './component/SearchBar';
import ItemList from './component/ItemList';
import { useMemo, useState } from 'react';

const ANIMALS: string[] = ['Dog', 'Cat', 'Rabbit', 'Camel'];

function App() {
  const [text, setText] = useState<string>('');

  const filtered = useMemo(() => {
    const q = text.trim().toLowerCase();
    if (q === '') return ANIMALS;

    return ANIMALS.filter((item) => item.toLowerCase().includes(q));
  }, [text]);

  return (
    <div>
      <SearchBar text={text} setText={setText} />
      <ItemList items={filtered} />
    </div>
  );
}

export default App;
