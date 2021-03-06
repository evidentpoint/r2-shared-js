// ==LICENSE-BEGIN==
// Copyright 2017 European Digital Reading Lab. All rights reserved.
// Licensed to the Readium Foundation under one or more contributor license agreements.
// Use of this source code is governed by a BSD-style license
// that can be found in the LICENSE file exposed on Github (readium) in the project repository.
// ==LICENSE-END==

import {
    XmlObject,
    XmlXPathSelector,
} from "@utils/xml-js-mapper";

@XmlObject({
    ncx: "http://www.daisy.org/z3986/2005/ncx/",
})
export class Content {

    // XPATH ROOT: /ncx:ncx/ncx:pageList/ncx:pageTarget/ncx:content
    // XPATH ROOT: /ncx:ncx/ncx:navMap/ncx:navPoint/ncx:content

    @XmlXPathSelector("@src")
    public Src!: string;
}
