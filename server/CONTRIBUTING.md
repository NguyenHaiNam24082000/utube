# HTTP

---

### Access external services

```ts
import { IHealthService } from './adapter';
import { Req } from '@nestjs/common';
import { ApiRequest } from 'libs/utils';

async get(@Req() req: ApiRequest): Promise<string> {
    const URL = 'https://legend-of-github-api.herokuapp.com';

    const span = request.tracing.createSpan(URL);

    let response;

    try {
      response = await request.tracing.axios().get(`${URL}/user/full?NguyenHaiNam24082000`);
    } finally {
      span.addTags({ headers: response.headers });
      span.addTags({ [request.tracing.tags.HTTP_STATUS_CODE]: response.status });
      span.finish();
    }
}
// OR
import { IHealthService } from './adapter';
import { Req } from '@nestjs/common';
import { ApiRequest } from 'libs/utils';

async get(@Req() req: ApiRequest): Promise<string> {
    req.tracing.setTracingTag(req.tracing.tags.PEER_SERVICE, 'github-scrap-api');
    req.tracing.setTracingTag(req.tracing.tags.SPAN_KIND, 'client');
    req.tracing.setTracingTag(req.tracing.tags.PEER_HOSTNAME, 'https://github.com/');
    await req.tracing.axios().get('https://legend-of-github-api.herokuapp.com/user/full?username=NguyenHaiNam24082000');
    return this.healthService.getText();
}
```

### Access internal services

```ts
import { Req } from '@nestjs/common';
import { ApiRequest } from 'libs/utils';

async get(@Req() req: ApiRequest): Promise<string> {
    await req.tracing
      .axios({
        headers: {
          Authorization: `Bearer ${req.headers['Authorization']}`,
        },
      })
      .post(this.secretService.authAPI.url + '/api/login', { login: 'admin', pass: 'admin' });
    return this.healthService.getText();
}

```

---
