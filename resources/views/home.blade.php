@extends('layouts.app')

@section('content')
<div class="container">
  <div class="row">
    <div class="col-md-8 col-md-offset-2">
      <div class="panel panel-default">
        <div class="panel-heading">Tweets</div>
        
        <div class="panel-body">
          @if (session('status'))
          <div class="alert alert-success">
            {{ session('status') }}
          </div>
          @endif
          
          @if (count($errors) > 0)
          <div class="alert alert-danger">
          	<strong>Whoops!</strong> There were some problems with your input.<br><br>
          	<ul>
          		@foreach ($errors->all() as $error)
          		<li>{{ $error }}</li>
          		@endforeach
          	</ul>
          </div>
          @endif

          {!! Form::open(array('route' => 'home.tweet','method'=>'POST','novalidate' => 'novalidate','files' => true)) !!}
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12">
              <div class="form-group">
                <strong>Tweet:</strong>
                {!! Form::text('tweet', null, array('placeholder' => 'Tweet','class' => 'form-control')) !!}
              </div>
            </div>          	
            <div class="col-xs-12 col-sm-12 col-md-12 text-right">
              <button type="submit" class="btn btn-primary">Tweet</button>
            </div>
          </div>
          {!! Form::close() !!}
          <div class="row tweet">
            @foreach ($tweet as $key => $item)
            
            <div class="col-xs-12 col-sm-12 col-md-12  block tweets" id="{{$item->id}}">
              <div class="col-xs-2 col-sm-2 col-md-2 text-left user">
                {{ $item->User->name }}
                
              </div>
              <div class="col-xs-10 col-sm-10 col-md-10 text-left">
                
                {{ $item->tweet }}
                
              </div>
            </div>
            @endforeach
          </div>
          
        </div>
      </div>
    </div>
  </div>
</div>
@endsection
