import React, { useState } from 'react';

import { FiPower, FiClock } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointment,
  Calendar,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="Razor Mustache" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem-vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários Agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento à seguir</strong>
            <div>
              <img
                src="https://avatars2.githubusercontent.com/u/6334925?s=460&u=22ac11f121d145ba9c4cd0f3be6cec2d2e0e2d89&v=4"
                alt="Igor Dias"
              />

              <strong>Igor Dias</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="https://avatars2.githubusercontent.com/u/6334925?s=460&u=22ac11f121d145ba9c4cd0f3be6cec2d2e0e2d89&v=4"
                  alt="Igor Dias"
                />

                <strong>Igor Dias</strong>
              </div>
            </Appointment>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="https://avatars2.githubusercontent.com/u/6334925?s=460&u=22ac11f121d145ba9c4cd0f3be6cec2d2e0e2d89&v=4"
                  alt="Igor Dias"
                />

                <strong>Igor Dias</strong>
              </div>
            </Appointment>
          </Section>

          <Section>
            <strong>Tarde</strong>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="https://avatars2.githubusercontent.com/u/6334925?s=460&u=22ac11f121d145ba9c4cd0f3be6cec2d2e0e2d89&v=4"
                  alt="Igor Dias"
                />

                <strong>Igor Dias</strong>
              </div>
            </Appointment>
          </Section>

          <Calendar />
        </Schedule>
      </Content>
    </Container>
  );
};
export default Dashboard;
