import _ from "lodash"; 

export function Paginate (items, pagenumber, pagesize)  {
    const startIndex = (pagenumber - 1) * pagesize;

    return _(items).slice(startIndex).take(pagesize).value();
}

