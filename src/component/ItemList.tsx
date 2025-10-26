const ItemList = ({ items }: { items: string[] }) => {

    return (
        <ul>
            {items.length === 0 ? (
                <li>No items found</li>
            ) : (
            items.map((item) => (
                    <li key={item}>{item}</li>
                ))
            )}
        </ul>
    );
};

export default ItemList;