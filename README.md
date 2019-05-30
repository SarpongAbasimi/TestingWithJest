# Learning How To TDD Using Jest

<h4 align="center">
29th May 2019
</h4>

> Today I had a paring session with Alice to learn how to TDD with jest.
> She expelained to me the concept of ``callback`` functions, ``event loop`` in javaScript and testing Asyn code.
> We also found out that ``beforeEach`` in ``jest`` does not work the same as ``beforeEach`` in ``RSpec``.
> She said I had a good understanding of ``event loop`` and that I need to look into ``testing `` them.


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
- Not that Enzyme can be used with ``Mocha`` or any ``JavaScript testing Framework``.
- For more about ``Enzyme`` click [here](https://airbnb.io/enzyme/).
