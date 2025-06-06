/*
  Copyright Dirk Lemstra https://github.com/dlemstra/magick-wasm.
  Licensed under the Apache License, Version 2.0.
*/

import { Percentage } from '@src/types/percentage';
import { TestFiles } from '@test/test-files';

describe('MagickImage#linearStretch', () => {
    it('should stretch the pixels of the image', () => {
        TestFiles.Images.fujiFilmFinePixS1ProJpg.use(image => {
            image.resize(100, 100);

            image.linearStretch(new Percentage(10), new Percentage(90));

            const histogram = image.histogram();
            expect(histogram.get('#66d4ffff')).toBe(88n);
        });
    });
});
