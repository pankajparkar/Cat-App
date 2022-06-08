# Accredify-Vue-Boilerplate

## Local project setup

1. `yarn install` - Install pacakges
2. `yarn serve` - http://localhost:8080
3. `yarn build` - create prod build
4. `yarn test:unit` - Run jest unit tests
5. `yarn test:e2e` - Run e2e cypress tests
6. `yarn lint` - Run linter

## How to run application? (walkthrough)

1. After running the application locally, run http://localhost:8080 in the browser
2. It will automatically load all cats in table
![Cat breeds](https://github.com/pankajparkar/Cat-App/blob/master/front-end/boilerplate/images/1-cat-list.png)
3. You can search cats by breed_name, type "abys" in the search box.
![Search by breed_name](https://github.com/pankajparkar/Cat-App/blob/master/front-end/boilerplate/images/2-search-abys.png)
4. Now click on "Search" button to look for result.
5. After you can see, only one record filter based on breed_name
![Filtered result](https://github.com/pankajparkar/Cat-App/blob/master/front-end/boilerplate/images/3-click-search-button.png)
6. You can clear the search, eventually it will refresh the results as well.
![Filtered result](https://github.com/pankajparkar/Cat-App/blob/master/front-end/boilerplate/images/4-clear-search.png)
7. When you click on any record of the table, it navigates to Cat details page. Cat details page display cat-details-card along with location map
![Cat details](https://github.com/pankajparkar/Cat-App/blob/master/front-end/boilerplate/images/5-click-arbian-mau.png)
8. Mobile view for cat-details-page.
![Mobile view Cat details](https://github.com/pankajparkar/Cat-App/blob/master/front-end/boilerplate/images/6-mobile-view.png)
9. About page
![About page](https://github.com/pankajparkar/Cat-App/blob/master/front-end/boilerplate/images/7-about-page.png)

## Future Roadmap

- Add typescript support
- Try to go around 90-95% test coverage.
- Work on reducing bundle size
- Use store instead of local component states.
- Add Breeds dropdown on details page, so that user can change the cat breed from there.
- Page designs can be improved
- Remove usage of `cy.wait` functions, instead wait until ongoing ajax finishes.

## Architectural Diagram

