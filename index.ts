import { Observable } from 'rxjs';
import { allBooks } from './data';

let AllBooksObservable$ = Observable.create(subscribe => {
    
    if (document.title == '') {
        subscribe.error('please add title element');
    }

    for (let book of allBooks) {
        subscribe.next(book);
    }

    setTimeout(() => {
        subscribe.complete();
    }, 2000);
});

AllBooksObservable$.subscribe(
    data => {
        console.log(data);
    },
    error => {
        console.log(error);
    },
    () => {
        console.log('complate async');
    }
);

