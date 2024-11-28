/*
  Copyright Dirk Lemstra https://github.com/dlemstra/magick-wasm.
  Licensed under the Apache License, Version 2.0.
*/

import { ColorType } from '@src/enums/color-type';
import { TestFiles } from '@test/test-files';

describe('MagickImage#colorType', () => {
    it('should return the color type', async () => {
        TestFiles.Images.Builtin.logo.use(image => {
            expect(image.colorType).toBe(ColorType.Palette);
        });
    });

    it('should return the color type of the settings when that is not undefined', async () => {
        TestFiles.Images.Builtin.logo.use(image => {
            image.settings.colorType = ColorType.Grayscale;

            expect(image.colorType).toBe(ColorType.Grayscale);
        });
    });

    it('should change color type', async () => {
        TestFiles.Images.Builtin.logo.use(image => {
            image.colorType = ColorType.TrueColor;
            expect(image.colorType).toBe(ColorType.TrueColor);
        });
    });
});
