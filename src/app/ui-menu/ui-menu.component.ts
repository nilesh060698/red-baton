import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-menu',
  templateUrl: './ui-menu.component.html',
  styleUrls: ['./ui-menu.component.scss']
})
export class UiMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   menuItems = [
    { 
      title:'Bot Info',
      description:'Detailed information about the bot',
      icon:'insert_drive_file'
     
    },
    { 
      title:'Users',
      description:'Add or manage users',
      icon:'person_outline'
     
    },
    { 
      title:'Channels',
      description:'Manage channels to host the bot',
      icon:'settings_remote'
     
    },
    { 
      title:'Visual Settings',
      description:'Configure color,fonts etc',
      icon:'center_focus_strong'
     
    },
    { 
      title:'Services',
      description:'Configure the services that bot supports',
      icon:'wifi'
     
    },
    { 
      title:'Templates',
      description:'Manage templates',
      icon:'wifi'
     
    },
    { 
      title:'Conversation Designer',
      description:'Manual design of conversation',
      icon:'wifi'
     
    },
    { 
      title:'Content to conversion Converter',
      description:'upload scrapes,create node,sequence ,publish',
      icon:'assignment'
     
    },
    { 
      title:'Language Trainer',
      description:'Training bot to understand domain  language',
      icon:'wifi'
     
    },
    { 
      title:'Search Configuration',
      description:'configure search with SOLR etc',
      icon:'search'
     
    },
    { 
      title:'Personalization and Recommendation',
      description:'empty',
      icon:'person_outline'
     
    },
    { 
      title:'Conversation Analytics',
      description:'Analysis of conversation based on few metrics',
      icon:'center_focus_strong'
     
    },
    { 
      title:'Content Store',
      description:'empty',
      icon:'wifi'
     
    },
    { 
      title:'APIs/Jobs',
      description:'empty',
      icon:'wifi'
     
    },
    { 
      title:'Business Taxanomy',
      description:'Client specific keywords etc.',
      icon:'wifi'
     
    },
    { 
      title:'File Store',
      description:'empty',
      icon:'wifi'
     
    },
    { 
      title:'Data Store',
      description:'empty',
      icon:'wifi'
     
    },
    { 
      title:'Dashboard',
      description:'See relevant insights about the bot',
      icon:'wifi'
     
    },
  ]

}
