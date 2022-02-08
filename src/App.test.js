import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() })

const setup = () => shallow(<App />)

const findByTestAttr = (wrapper, val) =>  wrapper.find(`[data-test='${val}']`)

test('renders without crashing', async () => {
  const wrapper = setup()
  const appComponent = await findByTestAttr(wrapper, 'component-app')
  expect(appComponent.length).toBe(1)
});

test('renders increment button', async () => {
  const wrapper = setup()
  const button = await findByTestAttr(wrapper, 'increment-button') 
  expect(button.length).toBe(1)
})

test('renders decrement button', async () => {
  const wrapper = setup()
  const button = await findByTestAttr(wrapper, 'decrement-button') 
  expect(button.length).toBe(1)
})

test('renders counter display', async () => {
  const wrapper = setup()
  const counterDisplay = await findByTestAttr(wrapper, 'counter-display')  
  expect(counterDisplay.length).toBe(1)
})

test('renders display counter starts at 0', async () => {
  const wrapper = setup()
  const counter = await findByTestAttr(wrapper, 'count')
  expect(counter.text()).toBe('0')
})

test('clicking button increment counter display', async () => {
  const wrapper = setup()
  const button = await findByTestAttr(wrapper, 'increment-button') 
  button.simulate('click')
  const counterDisplay = await findByTestAttr(wrapper, 'count')
  expect(counterDisplay.text()).toBe('1')
})

test('clicking button decrement counter display', async () => {
  const wrapper = setup()
  const button = await findByTestAttr(wrapper, 'decrement-button') 
  button.simulate('click')
  const counterDisplay = await findByTestAttr(wrapper, 'count')
  expect(counterDisplay.text()).toBe('-1')
})
