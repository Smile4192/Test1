import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import Users from './api/Users';
import { Invite, TeamMember } from './interface/User';

import Administrator from "./assets/images/admin_panel_settings_black_24dp (2) 1.png";
import Arrow from "./assets/images/chevron_right_black_24dp (4) 3.png";
import StandardUser from "./assets/images/person_black_24dp (3) 2.png";

interface UserInvitesProps {
  // Add any additional props you need
}

const App: React.FC<UserInvitesProps> = () => {
  const [users, setUsers] = useState<TeamMember[]>([]);
  const [invites, setInvites] = useState<Invite[]>([]);

  useEffect(() => {
    // Fetch users and invites from the API
    Users.getUsers().then((data) => setUsers(data));
    Users.getInvites().then((data) => setInvites(data));
  }, []);

  return (
    <Container>
      <MainContainer>
        <TitleContainer>
          <HeaderImage src={Administrator} alt='' />
          <HeaderTitle>Administrators</HeaderTitle>
        </TitleContainer>
        <MainContent>
          {users.map((user, index) => user.role === "Administrator" && (
            <DataList key={index}>
              <Name>{user.user.name} {user.user.lastName}</Name>
              <ArrowImage src={Arrow} alt='' />
            </DataList>
          ))}
          {invites.map((invite, index) => invite.role === "Administrator" && (
            <DataList key={index}>
              <PhoneNumber>{invite.phone}</PhoneNumber>
              <div style={{ display: 'flex', alignItems: "center" }}>
                <Badgecontainer>
                  <BadgeText>Invited</BadgeText>
                </Badgecontainer>
                <ArrowImage src={Arrow} alt='' />
              </div>
            </DataList>
          ))}
        </MainContent>
        <TitleContainer>
          <HeaderImage src={StandardUser} alt='' />
          <HeaderTitle>Standard Users</HeaderTitle>
        </TitleContainer>
        <MainContent>
          {users.map((user, index) => user.role === "Standard" && (
            <DataList key={index}>
              <Name>{user.user.name} {user.user.lastName}</Name>
              <ArrowImage src={Arrow} alt='' />
            </DataList>
          ))}
        </MainContent>
      </MainContainer>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;
`
const MainContainer = styled.div`
  width: 375px;
  background-color: #FAFAFD;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 30px 15px 15px;
`
const HeaderTitle = styled.span`
  color: #828B97;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.22px;
`
const HeaderImage = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`
const MainContent = styled.div`
  width: 343px;
  border-radius: 16px;
  background: #FFF;
  box-shadow: 0px 3px 24px 0px rgba(130, 139, 151, 0.06);
  margin-bottom: 30px;
`
const Name = styled.span`
  color: #3E4959;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.22px;
`
const PhoneNumber = styled.span`
  color: #828B97;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.22px;
`
const ArrowImage = styled.img`
  width: 26px;
  height: 26px;
`
const TitleContainer = styled.div`
  height: 40px;
  display: flex;
  margin-left: 10px;
`
const DataList = styled.div`
  height: 80px;
  box-sizing: border-box;
  margin-right: 20px;
  margin-left: 20px;
  border-bottom: #F8F8F9 solid 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Badgecontainer = styled.div`
  display: inline-flex;
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  gap: 2px;
  border-radius: 24px;
  background: #EEEFF2;
  margin-right: 10px;
`
const BadgeText = styled.span`
  color: #3E4959;
  text-align: right;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.22px;
`