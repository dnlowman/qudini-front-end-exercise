import React from 'react';
import CustomerCard from './CustomerCard';
import ProfilePicture from './ProfilePicture';
import Name from './Name';
import Content from './Content';

export default () =>
    <CustomerCard>
        <ProfilePicture />
        <Content>
            <Name></Name>
            <div></div>
        </Content>
    </CustomerCard>;
