import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Catalog from '../../features/catalog/Catalog';
import Header from './../../features/catalog/Header';
import Home from './../../features/home/Home';
import About from './../../features/about/About';
import Contact from './../../features/contact/Contact';
import ProductDetail from './../../features/productDetail/ProductDetail';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  });
  function handleTheme() {
    setDarkMode(darkMode === false ? true : false)
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleTheme} />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="catalog" element={<CatalogHandler  />} >
            <Route path="" element={<Catalog />} />
            <Route path=":id" element={<ProductDetail />} />
          </Route>
          {/* <Route path="product/:id" element={<ProductDetail />} /> */}
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}
function CatalogHandler() {
  return (
    <div>
      <Outlet />
    </div>
  )
}
export default App;
