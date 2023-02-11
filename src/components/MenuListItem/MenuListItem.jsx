// import './MenuListItem.css';

export default function MenuListItem({menuItem}){
    return(
        <div className="MenuListItem">
            <div className="name">{menuItem.name}</div>
        </div>
    );
}