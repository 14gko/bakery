import './CategoryList.css'
export default function CategoryList({ categories, activeCat, setActiveCat }) {
  const cats = categories.map(cat =>
    <li
      key={cat}
      className={cat === activeCat ? 'active' : ''}
      // FYI, the below will also work, but will give a warning
      // className={cat === activeCat && 'active'}
      onClick={() => setActiveCat(cat)}
    >
      {cat}
    </li>
  );
  return (
    <div className='flex flex-col'>
      <ul className="category-list flex flex-col gap-4 cat-li">
        {cats}
      </ul>
    </div>
  );
}
