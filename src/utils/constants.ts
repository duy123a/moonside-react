export enum QUANTITY_KIND {
  PC = 6,
  MOBILE = 2,
  IPAD = 6,
}

export enum IMAGE_SOURCE {
  PICSUM = '1',
  UPLOAD = '2',
}

export const RADIO_OPTIONS = [
  {
    label: 'Random image using picsums.photos',
    value: IMAGE_SOURCE.PICSUM,
  },
  {
    label: 'Upload picture from your computer',
    value: IMAGE_SOURCE.UPLOAD,
  },
];
