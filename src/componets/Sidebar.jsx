import { Stack } from '@mui/material';
import { categories } from '../utils/constants';

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: 'auto', md: '95%' },
      flexDirection: { md: 'column' },
      backgroundColor: '#000',
      color: 'white'
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory ? '#555' : 'transparent',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          padding: '10px 20px',
          textAlign: 'left',
          width: '100%'
        }}
        key={category.name}
      >
        <span
          style={{
            color: 'white',
            marginRight: '15px'
          }}
        >
          {category.icon}
        </span>
        <span
          style={{
            opacity: category.name === selectedCategory ? '1' : '0.8'
          }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
