import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';

const Home = lazy(() => import('pages/Home/Home'));
const About = lazy(() => import('pages/About/About'));
const Mission = lazy(() => import('components/Mission/Mission'));
const Team = lazy(() => import('components/Team/Team'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const Products = lazy(() => import('pages/Products/Products'));
const ProductDetails = lazy(() =>
  import('pages/ProductDetails/ProductDetails')
);
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

// Routes - этот компонент выполняет логику подбора наиболее подходящего Route для текущего значения URL в адресной строке браузера.
// Route позволяет связать определенный URL с некоторым компонентом.

// Функция React.lazy() отвечает за асинхронную загрузку компонента,
// а Suspense приостанавливает его отображение до завершения загрузки.

// Метод lazy() ожидает функцию-згарузчик,
// которая возвращает результат динамического импорта - промис,
// значением которого будет дефолтный экспорт модуля (компонент)

// сли во время рендера компонент MyComponent еще не загружен,
// необходимо показать заглушку. Для этого используется компонент Suspense.
// Проп fallback принимает любой React-элемент или компонент.
// Suspense можно поместить в любом месте над асинхронным компонентом или группой компонентов.

// Если вы используете прием «shared layout»,
// то нужно разместить Suspense непосредственно внутри компонента SharedLayout
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

//   <Route index element={<Home />} /> - индексный маршрут
// Индексным может быть только вложенный маршрут.
// В его Route не указывается пропс path, потому что он совпадает со значением path родителя.
// Вместо этого передается специальный пропс index,
// который указывает React Router что маршрут индексный
// и должен быть отрендерен на тот же адрес что и его родитель.

// Индексных маршрутов может быть сколько угодно, все зависит от задачи
