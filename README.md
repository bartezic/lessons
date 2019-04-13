# Elopage test task

- inside file `lessons.constants.js` we have `LESSONS`, it's object from which we should build sidebar(lessons tree)
- according to content lessons tree should be multilevel
- each tree element should be clickable:
-- when you clicking on category(`isCategory=true`) - category should show childrens
-- when click on lesson(`isCategory=false`) - we should display name and content of lesson on page(under content you should multiply name 1000 times to keep page NOT empty)

- sidebar and content should have 2 independent scrolls, when content huge and you scrolling it - sidebar should stay visible, when sidebar huge and you scrolling it - content should stay visible

- inside file `lessons.utils.js` we have function `checkIfPrevQuizzesEnabled`, which detecting if ANY prev lesson have enabled quiz(`quiz_enabled=true`), if YES - we should mark menu item as `locked`


You can use any modules, frameworks, instruments which you likes, you can use React/Redux/Mobx/SCSS... or just plain JavaScript/CSS.

As a result we should have page similar to this:
![Test task screen example](https://elopay-me-prod.s3.amazonaws.com/media_files/attachments/000/001/267/original/b345842159.jpg?1555152042)
