import React from 'react';

import { faAddressCard, faPercent, faMapMarkerAlt, faHome, faQuestionCircle, faCheckCircle, faTools} from '@fortawesome/free-solid-svg-icons';
import CardsPool from '../components/cards-pool';
import CardsPoolImage from '../assets/images/pizzacard.jpg';
import Corporate from '../components/corporate';
import CorporateImage from '../assets/images/corporate.jpg';
import CourierMap from '../components/CourierMap';
import CourierMapImage from '../assets/images/map.jpg';
import HomePage from '../components/home-page';
import QuizTest from '../components/QuizTest';
import QuizTestImage from '../assets/images/test.jpg';
import { QuizResults } from '../components/QuizTest';
import QuizResultsImage from '../assets/images/testresult.jpg';
import AdminPanel from '../components/AdminPanel';
import { UserContextConsumer } from '../contexts/UserContext';
import {createBrowserHistory} from 'history';


export const routesOrder = ['cardspool', 'corporate', 'couriermap','quiztest', 'quizresults', 'adminpanel', 'homepage'];
export const routesNavOrder = ['homepage', 'cardspool', 'corporate', 'couriermap', 'quiztest', 'quizresults', 'adminpanel']; 
export const history = createBrowserHistory();


export default {
    cardspool:
    {
        name: 'cardspool',
        path: "/cardspool",
        icon: faAddressCard,
        label: "Информация по картам",
        image: CardsPoolImage,
        description: "Позволяет просмотреть всю статистику по пицца картам",
        homepage: true,
        JSX: <>
                <UserContextConsumer>
                    { user => <CardsPool makeAuthorizedRequest={user.makeAuthorizedRequest}/>}
                </UserContextConsumer>
            </>,
    },
    corporate:
    {
        name: 'corporate',
        path: "/corporate",
        icon: faPercent,
        label: "Тариф корпоративный",
        image: CorporateImage,
        description: "Позволяет просмотреть всю статистику по тарифу «корпоративный»",
        homepage: true,
        JSX: <>
            <UserContextConsumer>
                { user => <Corporate makeAuthorizedRequest={user.makeAuthorizedRequest}/>}
            </UserContextConsumer>
        </>,
    },
    couriermap:
    {
        name: 'couriermap',
        path: "/couriermap",
        icon: faMapMarkerAlt,
        label: "Карта доставок",
        image: CourierMapImage,
        description: "Позволяет правильно распределить курьеров",
        homepage: true,
        JSX: <>
            <UserContextConsumer>
                { user => <CourierMap user={user}/>}
            </UserContextConsumer>
        </>,
    },
    homepage:
    {
        name: 'homepage',
        path: "/",
        icon: faHome,
        label: "Домашняя страница",
        image: CardsPoolImage,
        description: "Домашняя страница",
        homepage: false,
        JSX: <>
            <UserContextConsumer>
                { user => <HomePage user = {user} />}
            </UserContextConsumer>
        </>,
    },
    quiztest:
    {
        name: 'quiztest',
        path: "/quiztest",
        icon: faQuestionCircle,
        label: "Тестирование",
        image: QuizTestImage,
        description: "Ситема тестирования для сотрудников",
        homepage: true,
        JSX: <>
            <UserContextConsumer>
                { user => <QuizTest user={user} />}
            </UserContextConsumer>
        </>,
    },
    quizresults:
    {
        name: 'quizresults',
        path: "/quizresults",
        icon: faCheckCircle,
        label: "Результаты тестирования",
        image: QuizResultsImage,
        description: "Позволяет просмотреть результаты тестирования сотрудников",
        homepage: true,
        JSX: <>
            <UserContextConsumer>
                { user => <QuizResults user={user}/>}
            </UserContextConsumer>
        </>,
    },
    adminpanel:
    {
        name: 'adminpanel',
        path: "/adminpanel",
        icon: faTools,
        label: "Админ Панель",
        image: null,
        description: "Инструменты администратора",
        homepage: false,
        JSX: <>
            <UserContextConsumer>
                { user => <AdminPanel user={user}/>}
            </UserContextConsumer>
        </>,
    },
}