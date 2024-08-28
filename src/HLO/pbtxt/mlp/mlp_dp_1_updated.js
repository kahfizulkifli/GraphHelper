const text = `
HloModule SyncTensorsGraph.318, input_output_alias={ {0}: (2, {}, must-alias), {1}: (1, {}, must-alias), {2}: (4, {}, must-alias), {3}: (5, {}, must-alias), {4}: (6, {}, must-alias), {5}: (7, {}, must-alias) }

%MaxComputation.88 (x.89: f32[], y.90: f32[]) -> f32[] {
  %x.89 = f32[] parameter(0)
  %y.90 = f32[] parameter(1)
  ROOT %maximum.91 = f32[] maximum(f32[] %x.89, f32[] %y.90)
}

%AddComputation.97 (x.98: f32[], y.99: f32[]) -> f32[] {
  %x.98 = f32[] parameter(0)
  %y.99 = f32[] parameter(1)
  ROOT %add.100 = f32[] add(f32[] %x.98, f32[] %y.99)
}

%AddComputation.132 (x.133: f32[], y.134: f32[]) -> f32[] {
  %x.133 = f32[] parameter(0)
  %y.134 = f32[] parameter(1)
  ROOT %add.135 = f32[] add(f32[] %x.133, f32[] %y.134)
}

%AddComputation.144 (x.145: f32[], y.146: f32[]) -> f32[] {
  %x.145 = f32[] parameter(0)
  %y.146 = f32[] parameter(1)
  ROOT %add.147 = f32[] add(f32[] %x.145, f32[] %y.146)
}

%AddComputation.186 (x.187: f32[], y.188: f32[]) -> f32[] {
  %x.187 = f32[] parameter(0)
  %y.188 = f32[] parameter(1)
  ROOT %add.189 = f32[] add(f32[] %x.187, f32[] %y.188)
}

%AddComputation.224 (x.225: f32[], y.226: f32[]) -> f32[] {
  %x.225 = f32[] parameter(0)
  %y.226 = f32[] parameter(1)
  ROOT %add.227 = f32[] add(f32[] %x.225, f32[] %y.226)
}

%AddComputation.262 (x.263: f32[], y.264: f32[]) -> f32[] {
  %x.263 = f32[] parameter(0)
  %y.264 = f32[] parameter(1)
  ROOT %add.265 = f32[] add(f32[] %x.263, f32[] %y.264)
}

%AddComputation.305 (x.306: f32[], y.307: f32[]) -> f32[] {
  %x.306 = f32[] parameter(0)
  %y.307 = f32[] parameter(1)
  ROOT %add.308 = f32[] add(f32[] %x.306, f32[] %y.307)
}

%AddComputation.311 (x.312: f32[], y.313: f32[]) -> f32[] {
  %x.312 = f32[] parameter(0)
  %y.313 = f32[] parameter(1)
  ROOT %add.314 = f32[] add(f32[] %x.312, f32[] %y.313)
}

ENTRY %SyncTensorsGraph.318 (p0.1: f32[], p1.6: f32[120], p2.14: f32[120,784], p3.23: f32[32,1,28,28], p4.34: f32[84,120], p5.44: f32[84], p6.62: f32[10,84], p7.72: f32[10], p8.105: s64[32]) -> (f32[120,784], f32[120], f32[84,120], f32[84], f32[10,84], /*index=5*/f32[10], f32[32,784], f32[32,10], f32[]) {
  %p2.14 = f32[120,784]{1,0} parameter(2), frontend_attributes={neff_input_names="input2"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %p3.23 = f32[32,1,28,28]{3,2,1,0} parameter(3), frontend_attributes={neff_input_names="input3"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="train_torchrun.py" source_line=89}
  %reshape.24 = f32[32,784]{1,0} reshape(f32[32,1,28,28]{3,2,1,0} %p3.23), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %custom-call.13 = f32[120,784]{1,0} custom-call(f32[120,784]{1,0} %p2.14), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.22 = f32[784,120]{0,1} transpose(f32[120,784]{1,0} %custom-call.13), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %dot.25 = f32[32,120]{1,0} dot(f32[32,784]{1,0} %reshape.24, f32[784,120]{0,1} %transpose.22), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %p1.6 = f32[120]{0} parameter(1), frontend_attributes={neff_input_names="input1"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.14 = f32[120]{0} custom-call(f32[120]{0} %p1.6), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.29 = f32[32,120]{1,0} broadcast(f32[120]{0} %custom-call.14), dimensions={1}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %add.30 = f32[32,120]{1,0} add(f32[32,120]{1,0} %dot.25, f32[32,120]{1,0} %broadcast.29), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %constant.31 = f32[] constant(0), metadata={op_type="aten__relu" op_name="aten__relu" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1471}
  %broadcast.32 = f32[32,120]{1,0} broadcast(f32[] %constant.31), dimensions={}, metadata={op_type="aten__relu" op_name="aten__relu" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1471}
  %maximum.33 = f32[32,120]{1,0} maximum(f32[32,120]{1,0} %add.30, f32[32,120]{1,0} %broadcast.32), metadata={op_type="aten__relu" op_name="aten__relu" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1471}
  %constant.161 = f32[] constant(0), metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %broadcast.164 = f32[32,120]{1,0} broadcast(f32[] %constant.161), dimensions={}, metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %compare.165 = pred[32,120]{1,0} compare(f32[32,120]{1,0} %maximum.33, f32[32,120]{1,0} %broadcast.164), direction=GT, metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %p4.34 = f32[84,120]{1,0} parameter(4), frontend_attributes={neff_input_names="input4"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.15 = f32[84,120]{1,0} custom-call(f32[84,120]{1,0} %p4.34), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.52 = f32[120,84]{0,1} transpose(f32[84,120]{1,0} %custom-call.15), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %dot.53 = f32[32,84]{1,0} dot(f32[32,120]{1,0} %maximum.33, f32[120,84]{0,1} %transpose.52), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %p5.44 = f32[84]{0} parameter(5), frontend_attributes={neff_input_names="input5"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.16 = f32[84]{0} custom-call(f32[84]{0} %p5.44), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.57 = f32[32,84]{1,0} broadcast(f32[84]{0} %custom-call.16), dimensions={1}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %add.58 = f32[32,84]{1,0} add(f32[32,84]{1,0} %dot.53, f32[32,84]{1,0} %broadcast.57), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %constant.59 = f32[] constant(0), metadata={op_type="aten__relu" op_name="aten__relu" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1471}
  %broadcast.60 = f32[32,84]{1,0} broadcast(f32[] %constant.59), dimensions={}, metadata={op_type="aten__relu" op_name="aten__relu" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1471}
  %maximum.61 = f32[32,84]{1,0} maximum(f32[32,84]{1,0} %add.58, f32[32,84]{1,0} %broadcast.60), metadata={op_type="aten__relu" op_name="aten__relu" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1471}
  %constant.154 = f32[] constant(0), metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %broadcast.157 = f32[32,84]{1,0} broadcast(f32[] %constant.154), dimensions={}, metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %compare.158 = pred[32,84]{1,0} compare(f32[32,84]{1,0} %maximum.61, f32[32,84]{1,0} %broadcast.157), direction=GT, metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %p8.105 = s64[32]{0} parameter(8), frontend_attributes={neff_input_names="input8"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.111 = s64[32,10]{1,0} broadcast(s64[32]{0} %p8.105), dimensions={0}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %iota.1 = s64[32,10]{1,0} iota(), iota_dimension=1, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %compare.114 = pred[32,10]{1,0} compare(s64[32,10]{1,0} %broadcast.111, s64[32,10]{1,0} %iota.1), direction=EQ, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.109 = f32[] constant(1), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.116 = f32[32,10]{1,0} broadcast(f32[] %constant.109), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.108 = f32[] constant(0), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.115 = f32[32,10]{1,0} broadcast(f32[] %constant.108), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %select.117 = f32[32,10]{1,0} select(pred[32,10]{1,0} %compare.114, f32[32,10]{1,0} %broadcast.116, f32[32,10]{1,0} %broadcast.115), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %negate.118 = f32[32,10]{1,0} negate(f32[32,10]{1,0} %select.117), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.121 = s64[] constant(-100), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.122 = s64[32]{0} broadcast(s64[] %constant.121), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %compare.123 = pred[32]{0} compare(s64[32]{0} %p8.105, s64[32]{0} %broadcast.122), direction=NE, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.124 = f32[] constant(1), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.1 = f32[32]{0} broadcast(f32[] %constant.124), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.126 = f32[] constant(0), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.2 = f32[32]{0} broadcast(f32[] %constant.126), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %select.0 = f32[32]{0} select(pred[32]{0} %compare.123, f32[32]{0} %broadcast.1, f32[32]{0} %broadcast.2), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.4 = f32[32,10]{1,0} broadcast(f32[32]{0} %select.0), dimensions={0}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %multiply.130 = f32[32,10]{1,0} multiply(f32[32,10]{1,0} %broadcast.4, f32[32,10]{1,0} %select.117), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %multiply.140 = f32[32,10]{1,0} multiply(f32[32,10]{1,0} %negate.118, f32[32,10]{1,0} %multiply.130), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.131 = f32[] constant(0), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %reduce.136 = f32[] reduce(f32[32,10]{1,0} %multiply.130, f32[] %constant.131), dimensions={0,1}, to_apply=%AddComputation.132, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %compare.138 = pred[] compare(f32[] %reduce.136, f32[] %constant.131), direction=NE, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.137 = f32[] constant(1), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %select.139 = f32[] select(pred[] %compare.138, f32[] %reduce.136, f32[] %constant.137), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.141 = f32[32,10]{1,0} broadcast(f32[] %select.139), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %divide.142 = f32[32,10]{1,0} divide(f32[32,10]{1,0} %multiply.140, f32[32,10]{1,0} %broadcast.141), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %p6.62 = f32[10,84]{1,0} parameter(6), frontend_attributes={neff_input_names="input6"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.18 = f32[10,84]{1,0} custom-call(f32[10,84]{1,0} %p6.62), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.80 = f32[84,10]{0,1} transpose(f32[10,84]{1,0} %custom-call.18), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %dot.81 = f32[32,10]{1,0} dot(f32[32,84]{1,0} %maximum.61, f32[84,10]{0,1} %transpose.80), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %p7.72 = f32[10]{0} parameter(7), frontend_attributes={neff_input_names="input7"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.19 = f32[10]{0} custom-call(f32[10]{0} %p7.72), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.85 = f32[32,10]{1,0} broadcast(f32[10]{0} %custom-call.19), dimensions={1}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %add.86 = f32[32,10]{1,0} add(f32[32,10]{1,0} %dot.81, f32[32,10]{1,0} %broadcast.85), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %constant.87 = f32[] constant(-inf), metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %reduce.92 = f32[32]{0} reduce(f32[32,10]{1,0} %add.86, f32[] %constant.87), dimensions={1}, to_apply=%MaxComputation.88, metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %broadcast.93 = f32[32,10]{1,0} broadcast(f32[32]{0} %reduce.92), dimensions={0}, metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %subtract.94 = f32[32,10]{1,0} subtract(f32[32,10]{1,0} %add.86, f32[32,10]{1,0} %broadcast.93), metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %exponential.95 = f32[32,10]{1,0} exponential(f32[32,10]{1,0} %subtract.94), metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %constant.96 = f32[] constant(0), metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %reduce.101 = f32[32]{0} reduce(f32[32,10]{1,0} %exponential.95, f32[] %constant.96), dimensions={1}, to_apply=%AddComputation.97, metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %log.102 = f32[32]{0} log(f32[32]{0} %reduce.101), metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %broadcast.103 = f32[32,10]{1,0} broadcast(f32[32]{0} %log.102), dimensions={0}, metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %subtract.104 = f32[32,10]{1,0} subtract(f32[32,10]{1,0} %subtract.94, f32[32,10]{1,0} %broadcast.103), metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %exponential.149 = f32[32,10]{1,0} exponential(f32[32,10]{1,0} %subtract.104), metadata={op_type="aten___log_softmax_backward_data" op_name="aten___log_softmax_backward_data"}
  %constant.143 = f32[] constant(0), metadata={op_type="aten___log_softmax_backward_data" op_name="aten___log_softmax_backward_data"}
  %reduce.148 = f32[32]{0} reduce(f32[32,10]{1,0} %divide.142, f32[] %constant.143), dimensions={1}, to_apply=%AddComputation.144, metadata={op_type="aten___log_softmax_backward_data" op_name="aten___log_softmax_backward_data"}
  %broadcast.150 = f32[32,10]{1,0} broadcast(f32[32]{0} %reduce.148), dimensions={0}, metadata={op_type="aten___log_softmax_backward_data" op_name="aten___log_softmax_backward_data"}
  %multiply.151 = f32[32,10]{1,0} multiply(f32[32,10]{1,0} %exponential.149, f32[32,10]{1,0} %broadcast.150), metadata={op_type="aten___log_softmax_backward_data" op_name="aten___log_softmax_backward_data"}
  %subtract.152 = f32[32,10]{1,0} subtract(f32[32,10]{1,0} %divide.142, f32[32,10]{1,0} %multiply.151), metadata={op_type="aten___log_softmax_backward_data" op_name="aten___log_softmax_backward_data"}
  %dot.153 = f32[32,84]{1,0} dot(f32[32,10]{1,0} %subtract.152, f32[10,84]{1,0} %custom-call.18), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %constant.155 = f32[] constant(0), metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %broadcast.156 = f32[32,84]{1,0} broadcast(f32[] %constant.155), dimensions={}, metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %select.159 = f32[32,84]{1,0} select(pred[32,84]{1,0} %compare.158, f32[32,84]{1,0} %dot.153, f32[32,84]{1,0} %broadcast.156), metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %dot.160 = f32[32,120]{1,0} dot(f32[32,84]{1,0} %select.159, f32[84,120]{1,0} %custom-call.15), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %constant.162 = f32[] constant(0), metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %broadcast.163 = f32[32,120]{1,0} broadcast(f32[] %constant.162), dimensions={}, metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %select.166 = f32[32,120]{1,0} select(pred[32,120]{1,0} %compare.165, f32[32,120]{1,0} %dot.160, f32[32,120]{1,0} %broadcast.163), metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %reshape.167 = f32[32,784]{1,0} reshape(f32[32,1,28,28]{3,2,1,0} %p3.23), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.168 = f32[784,32]{0,1} transpose(f32[32,784]{1,0} %reshape.167), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot = f32[120,784]{0,1} dot(f32[32,120]{1,0} %select.166, f32[784,32]{0,1} %transpose.168), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.20 = f32[120,784]{1,0} custom-call(f32[120,784]{0,1} %dot), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %p0.1 = f32[] parameter(0), frontend_attributes={neff_input_names="input0"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %broadcast.5 = f32[120,784]{1,0} broadcast(f32[] %p0.1), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %multiply.178 = f32[120,784]{1,0} multiply(f32[120,784]{1,0} %custom-call.20, f32[120,784]{1,0} %broadcast.5), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %add.179 = f32[120,784]{1,0} add(f32[120,784]{1,0} %p2.14, f32[120,784]{1,0} %multiply.178), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %constant.184 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.190 = f32[120]{0} reduce(f32[32,120]{1,0} %select.166, f32[] %constant.184), dimensions={0}, to_apply=%AddComputation.186, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.21 = f32[120]{0} custom-call(f32[120]{0} %reduce.190), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.183 = f32[120]{0} broadcast(f32[] %p0.1), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %multiply.200 = f32[120]{0} multiply(f32[120]{0} %custom-call.21, f32[120]{0} %broadcast.183), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %add.201 = f32[120]{0} add(f32[120]{0} %p1.6, f32[120]{0} %multiply.200), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %transpose.206 = f32[120,32]{0,1} transpose(f32[32,120]{1,0} %maximum.33), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot.1 = f32[84,120]{0,1} dot(f32[32,84]{1,0} %select.159, f32[120,32]{0,1} %transpose.206), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.22 = f32[84,120]{1,0} custom-call(f32[84,120]{0,1} %dot.1), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.205 = f32[84,120]{1,0} broadcast(f32[] %p0.1), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %multiply.216 = f32[84,120]{1,0} multiply(f32[84,120]{1,0} %custom-call.22, f32[84,120]{1,0} %broadcast.205), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %add.217 = f32[84,120]{1,0} add(f32[84,120]{1,0} %p4.34, f32[84,120]{1,0} %multiply.216), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %constant.222 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.228 = f32[84]{0} reduce(f32[32,84]{1,0} %select.159, f32[] %constant.222), dimensions={0}, to_apply=%AddComputation.224, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.23 = f32[84]{0} custom-call(f32[84]{0} %reduce.228), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.221 = f32[84]{0} broadcast(f32[] %p0.1), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %multiply.238 = f32[84]{0} multiply(f32[84]{0} %custom-call.23, f32[84]{0} %broadcast.221), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %add.239 = f32[84]{0} add(f32[84]{0} %p5.44, f32[84]{0} %multiply.238), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %transpose.244 = f32[84,32]{0,1} transpose(f32[32,84]{1,0} %maximum.61), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot.2 = f32[10,84]{0,1} dot(f32[32,10]{1,0} %subtract.152, f32[84,32]{0,1} %transpose.244), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.24 = f32[10,84]{1,0} custom-call(f32[10,84]{0,1} %dot.2), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.243 = f32[10,84]{1,0} broadcast(f32[] %p0.1), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %multiply.254 = f32[10,84]{1,0} multiply(f32[10,84]{1,0} %custom-call.24, f32[10,84]{1,0} %broadcast.243), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %add.255 = f32[10,84]{1,0} add(f32[10,84]{1,0} %p6.62, f32[10,84]{1,0} %multiply.254), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %constant.260 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.266 = f32[10]{0} reduce(f32[32,10]{1,0} %subtract.152, f32[] %constant.260), dimensions={0}, to_apply=%AddComputation.262, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.25 = f32[10]{0} custom-call(f32[10]{0} %reduce.266), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.259 = f32[10]{0} broadcast(f32[] %p0.1), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %multiply.276 = f32[10]{0} multiply(f32[10]{0} %custom-call.25, f32[10]{0} %broadcast.259), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %add.277 = f32[10]{0} add(f32[10]{0} %p7.72, f32[10]{0} %multiply.276), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %broadcast.281 = s64[32,10]{1,0} broadcast(s64[32]{0} %p8.105), dimensions={0}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %iota.3 = s64[32,10]{1,0} iota(), iota_dimension=1, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %compare.284 = pred[32,10]{1,0} compare(s64[32,10]{1,0} %broadcast.281, s64[32,10]{1,0} %iota.3), direction=EQ, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %constant.279 = f32[] constant(1), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.286 = f32[32,10]{1,0} broadcast(f32[] %constant.279), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %constant.278 = f32[] constant(0), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.285 = f32[32,10]{1,0} broadcast(f32[] %constant.278), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %select.287 = f32[32,10]{1,0} select(pred[32,10]{1,0} %compare.284, f32[32,10]{1,0} %broadcast.286, f32[32,10]{1,0} %broadcast.285), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.290 = f32[32,10]{1,0} broadcast(f32[] %constant.279), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %compare.291 = pred[32,10]{1,0} compare(f32[32,10]{1,0} %select.287, f32[32,10]{1,0} %broadcast.290), direction=NE, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.292 = f32[32,10]{1,0} broadcast(f32[] %constant.278), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %negate.288 = f32[32,10]{1,0} negate(f32[32,10]{1,0} %select.287), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %multiply.289 = f32[32,10]{1,0} multiply(f32[32,10]{1,0} %negate.288, f32[32,10]{1,0} %subtract.104), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %select.293 = f32[32,10]{1,0} select(pred[32,10]{1,0} %compare.291, f32[32,10]{1,0} %broadcast.292, f32[32,10]{1,0} %multiply.289), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %constant.294 = s64[] constant(-100), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.295 = s64[32]{0} broadcast(s64[] %constant.294), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %compare.296 = pred[32]{0} compare(s64[32]{0} %p8.105, s64[32]{0} %broadcast.295), direction=NE, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %constant.297 = f32[] constant(1), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.6 = f32[32]{0} broadcast(f32[] %constant.297), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %constant.299 = f32[] constant(0), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.7 = f32[32]{0} broadcast(f32[] %constant.299), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %select.1 = f32[32]{0} select(pred[32]{0} %compare.296, f32[32]{0} %broadcast.6, f32[32]{0} %broadcast.7), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.8 = f32[32,10]{1,0} broadcast(f32[32]{0} %select.1), dimensions={0}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %multiply.303 = f32[32,10]{1,0} multiply(f32[32,10]{1,0} %broadcast.8, f32[32,10]{1,0} %select.287), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %multiply.310 = f32[32,10]{1,0} multiply(f32[32,10]{1,0} %select.293, f32[32,10]{1,0} %multiply.303), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %reduce.315 = f32[] reduce(f32[32,10]{1,0} %multiply.310, f32[] %constant.278), dimensions={0,1}, to_apply=%AddComputation.311, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %constant.304 = f32[] constant(0), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %reduce.309 = f32[] reduce(f32[32,10]{1,0} %multiply.303, f32[] %constant.304), dimensions={0,1}, to_apply=%AddComputation.305, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %divide.316 = f32[] divide(f32[] %reduce.315, f32[] %reduce.309), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  ROOT %tuple.317 = (f32[120,784]{1,0}, f32[120]{0}, f32[84,120]{1,0}, f32[84]{0}, f32[10,84]{1,0}, /*index=5*/f32[10]{0}, f32[32,784]{1,0}, f32[32,10]{1,0}, f32[]) tuple(f32[120,784]{1,0} %add.179, f32[120]{0} %add.201, f32[84,120]{1,0} %add.217, f32[84]{0} %add.239, f32[10,84]{1,0} %add.255, /*index=5*/f32[10]{0} %add.277, f32[32,784]{1,0} %reshape.24, f32[32,10]{1,0} %subtract.104, f32[] %divide.316), frontend_attributes={neff_output_names="output0,output1,output2,output3,output4,output5,output6,output7,output8"}
}



`

export default text;