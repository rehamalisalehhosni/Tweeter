<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Tweet;
use Auth;
use DB;


class HomeController extends Controller
{
    /**
    * Create a new controller instance.
    *
    * @return void
    */
    public function __construct()
    {
        $this->middleware('auth');
    }
    
    /**
    * Show the application dashboard.
    *
    * @return \Illuminate\Http\Response
    */
    public function index()
    {
        $tweet = Tweet::orderBy('id','DESC')->get();
        
        return view('home',compact('tweet'));
    }
    public function getTweet(Request $request)
    {
        $id=$request->id;
        if($id){
            $tweet = DB::table('tweet')
            ->join('users', 'tweet.user_id', '=', 'users.id')
            ->select('tweet.*','users.name')
            ->where('tweet.id','>',$id)->get();

            if(count($tweet)>0){
                return response()->json(['status'=>200,'data'=>$tweet]);                
            }else{
                return response()->json(['status'=>400]);
                
            }
        }
        return response()->json(['status'=>401]);
    }
    /**
    * Show the application dashboard.
    *
    * @return \Illuminate\Http\Response
    */
    public function tweet(Request $request)
    {
        $this->validate($request, [
            'tweet' => 'required|min:5',
        ]);
        $tweet = new Tweet;
        $tweet->tweet = $request->tweet;
        $tweet->user_id = Auth::user()->id;;
        $tweet->save() ;
        return redirect()->route('home')
        ->with('success','tweet created successfully');
    }
}
