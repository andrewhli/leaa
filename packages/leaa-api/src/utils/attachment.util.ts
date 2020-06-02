import { Attachment } from '@leaa/common/src/entrys';
import { attachmentConfig } from '@leaa/api/src/configs';
import { getAt2xPath } from '@leaa/api/src/utils/path.util';
import crypto from 'crypto';

export const isAt2x = (originalname: string): boolean => /[＠@_]2x/i.test(originalname);

export const filenameAt1xToAt2x = (filename: string): string => {
  const ext = `.${filename.split('.').pop()}`;

  return filename.replace(ext, `_2x${ext}`);
};

// const CLS_NAME = 'AttachmentProperty';

type IAttachment = Pick<Attachment, 'in_oss' | 'in_local' | 'path' | 'external_url'>;

export const genUrl = (attachment: IAttachment): string | null => {
  if (attachment.external_url) {
    const externalUrls = attachment.external_url.split('|');

    return externalUrls[0];
  }

  if (attachment.in_oss) {
    return `${attachmentConfig.URL_PREFIX_BY_OSS}${attachment.path}`;
  }

  if (attachment.in_local) {
    return `${attachmentConfig.URL_PREFIX_BY_LOCAL}${attachment.path}`;
  }

  return null;
};

export const genUrlAt2x = (attachment: Attachment): string | null => {
  if (attachment.external_url) {
    const externalUrls = attachment.external_url.split('|');

    return externalUrls[1] || externalUrls[0];
  }

  if (attachment.at2x) {
    return getAt2xPath(genUrl(attachment));
  }

  return null;
};

export const transAvatarUrl = (path?: string | null): string | null => {
  if (path?.includes('gravatar.com')) return path;

  if (path?.includes('/attachments/') && !path?.includes('http')) {
    return `${attachmentConfig.URL_PREFIX_BY_AUTO}${path}`;
  }

  return path || '';
};

export const genAvatarUrl = (hash?: string): string => {
  // set default avatar
  const hashMd5 = crypto
    .createHash('md5')
    .update(hash || `hash-${new Date().valueOf()}@local.com`)
    .digest('hex');

  const avatarParams = 's=160&d=monsterid';
  return `//secure.gravatar.com/avatar/${hashMd5}?${avatarParams}`;
};
