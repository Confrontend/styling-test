import React, { useState, useMemo, useCallback } from "react";

type ListItemProps = {
  id: number;
  displayName: string;
};

const ListItem = ({ displayName, id }: ListItemProps) => {
  return (
    <div>
      {id} : {displayName}
    </div>
  );
};

type FilteredListProps<T extends ListItemProps> = {
  items: T[];
  filterKeys: (keyof T)[];
};

const FilteredList = <T extends ListItemProps>({
  items,
  filterKeys,
}: FilteredListProps<T>) => {
  const [search, setSearch] = useState("");

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    },
    []
  );

  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      filterKeys.some((key) =>
        String(item[key]).toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, items, filterKeys]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleSearchChange}
      />
      <div>
        {filteredItems.map((item) => (
          <ListItem
            key={item.id}
            displayName={String(item.displayName)}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default FilteredList;
