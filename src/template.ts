export default /* html */ `
  <me-button>default</me-button>
  <me-button type="primary">default</me-button>
  <me-button type="danger">default</me-button>
  <me-button type="info">default</me-button>
  <me-button type="warning">default</me-button>
  <me-button type="success">default</me-button>
  <p />
  <div>
    <me-button>default</me-button>
    <me-button dashed type="primary">default</me-button>
    <me-button dashed type="danger">default</me-button>
    <me-button dashed type="info">default</me-button>
    <me-button dashed type="warning">default</me-button>
    <me-button dashed type="success">default</me-button>
  </div>
  <p />
  <div>
    <me-button color="red">default</me-button>
    <me-button color="red" type="primary">default</me-button>
  </div>
  <p />
  <div>
    <me-button disabled color="red">default</me-button>
    <me-button circle >default</me-button>
  </div>
  <div>
      <me-text color="primary">
        textdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        textdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        textdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        textdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
      </me-text>
      <me-text color="primary" row="3">
        textdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        textdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        textdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        textdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
      </me-text>
    </div>
    <div>
      <p>头部</p>
      <me-divider></me-divider>
      <p>尾部</p>
    </div>
    <div>
      <p>头部</p>
      <me-divider dashed></me-divider>
      <p>尾部</p>
    </div>
    <div>
      <p>头部</p>
      <me-divider placement="center">内容</me-divider>
      <p>尾部</p>
    </div>
    <div>
      <p>头部</p>
      <me-divider placement="left">内容</me-divider>
      <p>尾部</p>
    </div>
    <div>
      <p>头部</p>
      <me-divider placement="right" dashed>内容</me-divider>
      <p>尾部</p>
    </div>
    <div>
      <span>sss</span>
      <me-divider vertical style="height: 60px; background-color: #7cb305"></me-divider>
      <span>ssss</span>
    </div>
    <p></p>
    <p></p>
    <p></p>
    <div>
      <span>sss</span>
      <me-divider vertical dashed></me-divider>
      <span>ssss</span>
    </div>
    <section>
        <me-space class="dd">
          <me-button>default</me-button>
          <me-button>default</me-button>
          <me-button>default</me-button>
        </me-space>
      </section>
      <section>
    <h1>collapse-1</h1>
    <me-collapse >
      <me-collapse-panel name="1" slot="panel" expanded="true">
        <div slot="title">title</div>
        <div>ddddddddddddddd</div>
        <div>ddddddddddddddd</div>
        <div>ddddddddddddddd</div>
        <div>ddddddddddddddd</div>
        <div>ddddddddddddddd</div>
        <div>ddddddddddddddd</div>
      </me-collapse-panel>
      <me-collapse-panel name="2" slot="panel" expanded>
        <div slot="title">2</div>
        2222222222222
      </me-collapse-panel>
      <me-collapse-panel name="3" slot="panel" disabled>
        <div slot="title">3</div>
        3333333333333
      </me-collapse-panel>
      <me-collapse-panel name="4" slot="panel">
        <div slot="title">title</div>
        <div>title</div>
      </me-collapse-panel>
    </me-collapse>
  </section>
`;
