import zhLocale from 'element-ui/lib/locale/lang/zh-CN';
import enLocale from 'element-ui/lib/locale/lang/en';
import ThLocale from 'element-ui/lib/locale/lang/th';

import cnLang from './langs/zh-cn';
import enLang from './langs/eng';
import thLang from './langs/th';

export default {
  'zh-cn': {
    ...zhLocale,
    ...cnLang,
  },
  eng: {
    ...enLocale,
    ...enLang,
  },
  th: {
    ...ThLocale,
    ...thLang,
  },
};
