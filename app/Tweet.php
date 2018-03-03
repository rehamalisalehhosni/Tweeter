<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Tweet extends Authenticatable
{
  use Notifiable;
  protected $table = 'tweet';
  
  protected $primaryKey = 'id';
  
  public $timestamps = true;
  /**
  * The attributes that are mass assignable.
  *
  * @var array
  */
  protected $fillable = [
    'tweet', 'user_id',
  ];
  
  public function user()
  {
    return $this->belongsTo('App\User' , 'user_id');
  }
  
}
