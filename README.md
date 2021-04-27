
## FullstackInfiniteScroll using React as Frontend and Django as Backend

### Backend is created using Django and contains 500 Company dummy data with images to test Infinite scroll, Pagination and Lazy loading of Image

### Frontend is create using React and Contains 4 Routes

## "/"** route contains normal pagination with view More Button (User have to click view more to load more data) <br>
<!--![pag1](https://user-images.githubusercontent.com/65633542/116308207-1836b380-a75c-11eb-85f1-54a2131664a2.gif) -->

## "/paginator"** route containg pagination with page number (User can click on page no to view that page) <br>
<!--![pag2](https://user-images.githubusercontent.com/65633542/116307811-a2324c80-a75b-11eb-83c9-e5c8da5d9235.gif) -->


**"/infinite-scroller"** route contain infinite scroller to lazyLoad data as soon as user scroll to bottom <br>


**"/swr route contains"** infinite scroller using useSWR to improve performance <br>

#### All image are rendered using a Custom Image Component created using IntersectionObserver Api to only Load Image when in view else render a placeholder so that not all images are loaded on page load to give performance boost



