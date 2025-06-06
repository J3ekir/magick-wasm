/*
  Copyright Dirk Lemstra https://github.com/dlemstra/magick-wasm.
  Licensed under the Apache License, Version 2.0.
*/

import { Gravity } from '@src/enums/gravity';
import { MagickColors } from '@src/magick-colors';
import { MagickGeometry } from '@src/types/magick-geometry';
import { TestFiles } from '@test/test-files';

describe('MagickImage#crop', () => {
    it('should crop the image', () => {
        TestFiles.Images.Color.black.use(image => {
            image.extent(new MagickGeometry('3x3'), Gravity.Center, MagickColors.White);

            image.crop(1, 1);

            expect(image.width).toBe(1);
            expect(image.height).toBe(1);
            expect(image).toHavePixelWithColor(0, 0, '#ffffff');
        });
    });

    it('should crop the image with the specified gravity', () => {
        TestFiles.Images.Color.black.use(image => {
            image.extent(new MagickGeometry('3x3'), Gravity.Center, MagickColors.White);

            image.crop(1, 1, Gravity.Center);

            expect(image.width).toBe(1);
            expect(image.height).toBe(1);
            expect(image).toHavePixelWithColor(0, 0, '#000000');
        });
    });

    it('should crop the image with the specified geometry', () => {
        TestFiles.Images.Color.black.use(image => {
            image.extent(new MagickGeometry('3x3'), Gravity.Center, MagickColors.White);

            image.crop(new MagickGeometry('2x2'));

            expect(image.width).toBe(2);
            expect(image.height).toBe(2);
            expect(image).toHavePixelWithColor(0, 0, '#ffffff');
            expect(image).toHavePixelWithColor(1, 1, '#000000');
        });
    });

    it('should crop the image with the specified geometry and gravity', () => {
        TestFiles.Images.Color.black.use(image => {
            image.extent(new MagickGeometry('3x3'), Gravity.Center, MagickColors.White);

            image.crop(new MagickGeometry('2x2'), Gravity.Southeast);

            expect(image.width).toBe(2);
            expect(image.height).toBe(2);
            expect(image).toHavePixelWithColor(0, 0, '#000000');
            expect(image).toHavePixelWithColor(1, 1, '#ffffff');
        });
    });
});
