/* ElastAlert Rules*/
export interface ElastalertDataForm_List {
    directories :    string[];
    rules :          string[];
}

export interface ElastalertDataForm {
    error : string;
    data  : ElastalertDataForm_List;
}

/* ElastAlert templates*/
export interface ElastalertTemplateForm_List {
    directories :    string[];
    templates :      string[];
}

export interface ElastalertTemplateForm {
    error : string;
    data  : ElastalertTemplateForm_List;
}

export interface ElastalertRuleForm {
    error : string;
    data  : {
        data : string;
    }

}

/* 'post/delete' method Response */
export interface ResCommonForm {
    error: string;
    data : {
        msg: string;
    }
}