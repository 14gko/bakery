import MenuListItem from '../MenuListItem/MenuListItem';
import './MenuList.css';

export default function MenuList({menuItems, handleAddToOrder, query, getFilteredItems}){
    const filteredItems = getFilteredItems(query, menuItems)

    const items = filteredItems.map(item =>
        <MenuListItem
            key={item._id}
            menuItem={item}
            handleAddToOrder={handleAddToOrder}
        />
        )

    // const items = menuItems.map(item => <MenuListItem 
    //     key={item._id}
    //     menuItem={item}
    //     handleAddToOrder={handleAddToOrder}
    //     />);
        // console.log(menuItems)
    return <main className="MenuList">
        {items}
        </main>
}