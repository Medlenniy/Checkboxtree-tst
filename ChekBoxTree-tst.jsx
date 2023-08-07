import React, { useState, useEffect } from 'react';

// old
// function TreeNode({ label, children }) {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div>
//       <div  onClick={() => setIsOpen(!isOpen)}>
//         <input type="checkbox" />
//         {label}
//       </div>
//       {isOpen && <div style={{ marginLeft: '20px' }}>{children}</div>}
//     </div>
//   );
// }
function TreeNode({ label, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleLabelClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div>
      <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
      <span onClick={handleLabelClick}>{label}</span>
      {isOpen && (
        <div style={{ marginLeft: '20px' }}>
          {children }
        </div>
      )}
    </div>
  );
}

function CheckboxItem({ item }) {
  return (
    <div>
      <input type="checkbox" id={item.id} />
      <label htmlFor={item.id}>{item.name}</label>
    </div>
  );
}


function TreeList({ data }) {
  const renderedData = Object.entries(data).map(([categoryKey, categoryValue]) => {
    const items = Object.values(categoryValue).map((item) => (
      <CheckboxItem key={item.id} item={item} />
    ));
    return (
      <TreeNode key={categoryKey} label={categoryKey}>
        {items}
      </TreeNode>
    );
  });

  return <div>{renderedData}</div>;
}

const data = {
  vegetables: {
    potato: {
      id: 1,
      name: 'potato',
      count: 8,
    },
    carrot: {
      id: 2,
      name: 'carrot',
      count: 99,
    },
  },
  fruits: {
    strawberry: {
      id: 1,
      name: 'strawberry',
      count: 3,
    },
    blueberry: {
      id: 2,
      name: 'blueberry',
      count: 9,
    },
  },
};

function App() {
  return <TreeList data={data} />;
}

export default App;

