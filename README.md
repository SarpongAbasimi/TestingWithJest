# Learning How To TDD Using Jest

<h4 align="center">
29th May 2019
</h4>

 - The goal of this project is to help me understand how 
   - ``jest works``.
   - use ``jest fn()`` and ``jest mocks``.

#### How to run tests.

- ``Fork`` and ``clone`` this repo.
- cd into ``TestingWithJest``.
- run npm install.
- run ``npm test `` to run tests.

<h4 align="center">
30th May 2018.
</h4>

> Testing React App With Jest And Enzyme

- When Using create ``Create-React-App`` you don't have to install ``jest``.
- This is because Create-React-App already comes shipped with ``React``.
- You would have to install enzyme. Install it using ``npm install add --dev enzyme``.
- Create a ``setupTests.js`` file at ``./src/setupTests.js``
- Copy and paste this to into the ``setupTests.js`` file .

```
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
```
> Create-React-App will automatically pick up this file, if not using CRA then also add this line in the same location as snapshotSerializers above or import the file into your test file.

- ``setupFiles": ["./src/setupTests.js"]``. For more info [click here](https://medium.com/codeclan/testing-react-with-jest-and-enzyme-20505fec4675) or [here](https://jestjs.io/docs/en/tutorial-react#setup-without-create-react-app)


> Testing Hello.

![Screen Shot 2019-05-30 at 09 15 26](https://user-images.githubusercontent.com/37377831/58618914-9a41a780-82bb-11e9-86b4-97cd0499cd14.png)


![Screen Shot 2019-05-30 at 09 15 35](https://user-images.githubusercontent.com/37377831/58618976-bd6c5700-82bb-11e9-8520-78a6797d88ef.png)

- This is how I test React Applications.
- Note that Enzyme can be used with ``Mocha`` or any ``JavaScript testing Framework``.
- For more about ``Enzyme`` click [here](https://airbnb.io/enzyme/).
- Lastly, if you do have an issuse check this [link](https://github.com/airbnb/enzyme/issues/1265)
