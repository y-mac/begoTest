export interface Destination {
  address: string,
  start_date: Date,
  end_date: Date,
  nickname: string,
  show_navigation: boolean
}


export interface Orders {
  _id: string,
  status: number,
  order_number: string,
  manager: string,
  driver: string,
  version: string,
  type: string,
  destinations: Destination[],
  start_date: 1649193900000,
  end_date: 1649708880000,
  is_today: false,
  status_string: string,
  status_class: string,
  driver_thumbnail: string
}
  
  

