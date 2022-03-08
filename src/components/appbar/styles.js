import styled from 'styled-components';

const AppBarStyles = styled.nav`
  position: relative;
  box-shadow: 0 0 2px 1px grey;
  padding: 1.125rem;
`;

// Layout Components
const AppBarItems = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AppBarItemGroup = styled.li`
  display: flex;
  gap: 0.25rem;
`;

const AppBarItem = styled.li`
  
`;

export {AppBarStyles, AppBarItem, AppBarItemGroup, AppBarItems}