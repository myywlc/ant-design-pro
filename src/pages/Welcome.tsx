import React from 'react';
import { FormattedMessage } from 'umi-plugin-react/locale';
import { Card, Typography, Alert, Button, Divider, Row, Col, Layout, Menu, Breadcrumb } from 'antd';
import { Desktop, PieChart, File, Team, User } from '@ant-design/icons';

import '@/dark.less';

const { Title, Paragraph, Text } = Typography;
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const CodePreview: React.FC<{}> = ({ children }) => (
  <pre>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

export default () => {
  const [collapsed, setCollapsed] = React.useState(false);

  const onCollapse = collapsed => {
    setCollapsed(collapsed);
  };
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <PieChart />
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Desktop />
            <span>Option 2</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <User />
                <span>User</span>
              </span>
            }
          >
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Team />
                <span>Team</span>
              </span>
            }
          >
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            <File />
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header />
        <Content>
          <Breadcrumb>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div>Bill is a cat.</div>
          <Card>
            <Alert
              message="umi ui 现已发布，欢迎使用 npm run ui 启动体验。"
              type="success"
              showIcon
              banner
            />
            <Typography.Text strong>
              <a target="_blank" rel="noopener noreferrer" href="https://pro.ant.design/docs/block">
                <FormattedMessage
                  id="app.welcome.link.block-list"
                  defaultMessage="基于 block 开发，快速构建标准页面"
                />
              </a>
            </Typography.Text>
            <CodePreview>npx umi block list</CodePreview>
            <Typography.Text strong>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://pro.ant.design/docs/available-script#npm-run-fetchblocks"
              >
                <FormattedMessage
                  id="app.welcome.link.fetch-blocks"
                  defaultMessage="获取全部区块"
                />
              </a>
            </Typography.Text>
            <CodePreview> npm run fetch:blocks</CodePreview>
          </Card>
          <p>
            Want to add more pages? Please refer to{' '}
            <a
              href="https://pro.ant.design/docs/block-cn"
              target="_blank"
              rel="noopener noreferrer"
            >
              use block
            </a>
            。
          </p>
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
          <Button type="link">Link</Button>
          <Typography>
            <Title>Introduction</Title>
            <Paragraph>
              In the process of internal desktop applications development, many different design
              specs and implementations would be involved, which might cause designers and
              developers difficulties and duplication and reduce the efficiency of development.
            </Paragraph>
            <Paragraph>
              After massive project practice and summaries, Ant Design, a design language for
              background applications, is refined by Ant UED Team, which aims to
              <Text strong>
                uniform the user interface specs for internal background projects, lower the
                unnecessary cost of design differences and implementation and liberate the resources
                of design and front-end development
              </Text>
              .
            </Paragraph>
            <Title level={2}>Guidelines and Resources</Title>
            <Paragraph>
              We supply a series of design principles, practical patterns and high quality design
              resources (<Text code>Sketch</Text> and <Text code>Axure</Text>), to help people
              create their product prototypes beautifully and efficiently.
            </Paragraph>

            <Paragraph>
              <ul>
                <li>
                  <a href="/docs/spec/proximity">Principles</a>
                </li>
                <li>
                  <a href="/docs/pattern/navigation">Patterns</a>
                </li>
                <li>
                  <a href="/docs/resource/download">Resource Download</a>
                </li>
              </ul>
            </Paragraph>

            <Divider />

            <Title>介绍</Title>
            <Paragraph>
              蚂蚁的企业级产品是一个庞大且复杂的体系。这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容。
            </Paragraph>
            <Paragraph>
              随着商业化的趋势，越来越多的企业级产品对更好的用户体验有了进一步的要求。带着这样的一个终极目标，我们（蚂蚁金服体验技术部）经过大量的项目实践和总结，逐步打磨出一个服务于企业级产品的设计体系
              Ant Design。基于<Text mark>『确定』和『自然』</Text>
              的设计价值观，通过模块化的解决方案，降低冗余的生产成本，让设计者专注于
              <Text strong>更好的用户体验</Text>。
            </Paragraph>
            <Title level={2}>设计资源</Title>
            <Paragraph>
              我们提供完善的设计原则、最佳实践和设计资源文件（<Text code>Sketch</Text> 和
              <Text code>Axure</Text>），来帮助业务快速设计出高质量的产品原型。
            </Paragraph>

            <Paragraph>
              <ul>
                <li>
                  <a href="/docs/spec/proximity">设计原则</a>
                </li>
                <li>
                  <a href="/docs/pattern/navigation">设计模式</a>
                </li>
                <li>
                  <a href="/docs/resource/download">设计资源</a>
                </li>
              </ul>
            </Paragraph>
          </Typography>

          <Row>
            <Col span={12}>col-12</Col>
            <Col span={12}>col-12</Col>
          </Row>
          <Row>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
          </Row>
          <Row>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
          </Row>
        </Content>
        <Footer>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};
