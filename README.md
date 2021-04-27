## Fullstack InfiniteScroll using React as Frontend and Django as Backend
![infiniteSAcroll3](https://user-images.githubusercontent.com/65633542/116314846-80899300-a764-11eb-9859-b6397bfc0905.gif)
### Backend is created using Django and contains list of 500 Company dummy data in database with images to test Infinite scroll, Pagination and Lazy loading of Image


### Steps to run Backend Server
git clone https://github.com/gmrzone/FullstackInfiniteScroll.git <br>
cd Backend

#### Create Virtual Environment
python -m venv env

#### Activate Virtual Environment
source env/bin/activate

#### install dependencies
pip install -r requirements.txt

#### Run Server
python manage.py Runserver


#### All image are rendered using a Custom Image Component created using IntersectionObserver Api To LAzy Load Images when Image is in view else render a placeholder so that not all images are loaded on page load to give performance boost

### Frontend is create using React and Contains 4 Routes

#### "/" route contains normal pagination with a View More Button (User have to click view more to load more data) <br>

#### "/paginator"** route containg pagination with page number (User can click on page no to view that page) <br>

#### "/infinite-scroller"** route contain infinite scroller to lazyLoad data as soon as user scroll to bottom using Javascript Intersection Observer Api<br>

#### "/swr route contains"** infinite scroller using useSWR to improve performance <br>


### Steps to run Frontend Server

#### After cloning, change directory to Frontend
cd frontend

#### install dependencies
npm install

#### Run Server
npm start





