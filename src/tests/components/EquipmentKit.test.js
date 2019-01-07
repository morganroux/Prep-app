import React from 'react'
import { EquipmentKit } from '../../components/EquipmentKit';
import { shallow } from 'enzyme';
import equipments from '../fixtures/equipment';

let wrapper, removeEquipment, enqueueSnackbar;

beforeEach(() => {
    removeEquipment = jest.fn();
    enqueueSnackbar = jest.fn();
    wrapper = shallow(<EquipmentKit 
        kit = {equipments[3]}
        removeEquipment = {removeEquipment}
        enqueueSnackbar = {enqueueSnackbar}
        equipments= {equipments}
    />);

});

test('should render EquipmentKit', () => {
    
     expect(wrapper).toMatchSnapshot();
 });

 test('should handle onRemove', () => {
    wrapper.find('.delbutton').simulate('click');
    expect(removeEquipment).toHaveBeenCalledWith(equipments[3].id);
    expect(enqueueSnackbar).toHaveBeenCalledWith('Kit supprimé', {variant:'success'});
    
 })

 test('should handle onExpand', () => {
    const expand = wrapper.state('expand'); 
    wrapper.find('.expand-button').simulate('click');
    expect(wrapper.state('expand')).toEqual(!expand);
 })

