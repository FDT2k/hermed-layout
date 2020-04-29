import React, { useEffect, useState, useRef } from 'react';
import { bem, compose, withModifiers, wrapComponent, divElement, withBaseClass, cEx } from 'utils'

import LayoutFlex from 'layouts/Flex'

const calculateCutOff = (len, delta, items) =>  {
    var cutoff = [];
    var cutsum = 0;
    for(var i in items) {
        var item = items[i];
        var fractOfLen = item.scaletwidth / len;
        cutoff[i] = Math.floor(fractOfLen * delta);
        cutsum += cutoff[i];
    }

    var stillToCutOff = delta - cutsum;
    while(stillToCutOff > 0) {
        for(i in cutoff) {
            cutoff[i]++;
            stillToCutOff--;
            if (stillToCutOff < 0) break;
        }
    }
    return cutoff;
}

const thumbScale = (item, rowHeight) => {
    return Math.floor(rowHeight * (item.width / item.height));
}

const buildImageRow =  (items, containerWidth, margin=5) => {
    var row = [];
    var len = 0;
    var imgMargin = 2 * margin;
    while(items.length > 0 && len < containerWidth) {
        var item = items.shift();
        row.push(item);
        len += (item.scaletwidth + imgMargin);
    }

    var delta = len - containerWidth;
    if(row.length > 0 && delta > 0) {
        var cutoff = calculateCutOff(len, delta, row);
        for(var i in row) {
            var pixelsToRemove = cutoff[i];
            item = row[i];
            item.marginLeft = -Math.abs(Math.floor(pixelsToRemove / 2));
            item.vwidth = item.scaletwidth - pixelsToRemove;
        }
    }
    else {
        for(var j in row) {
            item = row[j];
            item.marginLeft = 0;
            item.vwidth = item.scaletwidth;
        }
    }
    return row;
}


const genThumbs = (containerWidth, rowHeight,images, margin=5 ,maxRows) => {
    if (!images) return [];
    if (containerWidth == 0) return [];

    var items = images.slice();
    for (var t in items) {
        //this.setThumbScale(items[t]);
        items[t].scaletwidth = thumbScale(items[t],rowHeight);
    }

    var thumbs = [];
    var rows = [];
    while (items.length > 0) {
        rows.push(buildImageRow(items, containerWidth,margin));
    }

    for (var r in rows) {
        for (var i in rows[r]) {
            var item = rows[r][i];
            if (maxRows) {
                if (r < maxRows) {
                    thumbs.push(item);
                }
            }
            else {
                thumbs.push(item);
            }
        }
    }
    return thumbs;
}


/*

{Item:}

 */
const Component = props => {
    const { rowHeight, items, children, ...rest } = props;
    const ref = useRef();
    const [width, setWidth] = useState(0)
    const [thumbs,setThumbs] = useState([]);

    const onResize = e => {
        console.log('Gallery: resize')
        setWidth(ref.current.clientWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', onResize)
        onResize();
        return () => { window.removeEventListener('resize', onResize) }
    }, [])

    useEffect(() => {
        if (width > 0) {
            console.log('width changed ', width)
            const _th = genThumbs(width,194,items);

            setThumbs(_th)
        }
    }, [width])


   
    console.log('items', thumbs)

    return (
        <div ref={ref}>
            <LayoutFlex {...rest}>
                {
                    thumbs.map(item=> 
                        <div style={{height:194,width:item.vwidth}}>
                            <img src={item.src} className="galery__thumb"/>
                        </div>
                        )
                }
            </LayoutFlex>
        </div>
    )

}

export default Component;